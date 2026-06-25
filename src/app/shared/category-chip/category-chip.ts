import { Component, computed, input } from '@angular/core';
import { ExpenseCategoryMetadata } from '@api-client';

@Component({
  selector: 'app-category-chip',
  imports: [],
  templateUrl: './category-chip.html',
  styleUrl: './category-chip.css',
})
export class CategoryChip {
  
  readonly category = input.required<ExpenseCategoryMetadata>();
  
  protected readonly labelText = computed(() => this.category().name);
  protected readonly backgroundColor = computed(() => this.category().color);
  protected readonly textColor = computed(() => this.calculateTextColor(this.category().color));

  private calculateTextColor(colorHex: string) {
    // Remove the hash if it exists
    let cleanHex = colorHex.replace('#', '');
    
    // Convert 3-digit hex (#FFF) to 6-digit (#FFFFFF)
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(char => char + char).join('');
    }
    
    // Parse Red, Green, and Blue values
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    return this.yiqFormula(r, g, b);
  }
  
  private yiqFormula(red: number, green: number, blue: number): '#000000' | '#FFFFFF' {
    // Apply YIQ formula to calculate perceived brightness
    const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    
    // If brightness is greater than or equal to 128, return black text; otherwise white
    return yiq >= 128 ? '#000000' : '#FFFFFF';
  }
}
