import { Component, input } from '@angular/core';
import { ExpenseCategory } from '@api-client';
import { HlmLead } from "@spartan-ng/helm/typography";
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRightCircle, lucideCirclePlus, lucideList } from '@ng-icons/lucide';
import { HlmIcon } from "@spartan-ng/helm/icon";
import { HlmButton } from "@spartan-ng/helm/button";
import { HlmItemImports } from "@spartan-ng/helm/item";
import { RouterLink } from '@angular/router';
import { SubpageContainer } from "../../../shared/subpage/subpage-container";

@Component({
  selector: 'app-categories-subpage',
  imports: [HlmLead, HlmEmptyImports, HlmIcon, NgIcon, HlmButton, HlmItemImports, RouterLink, SubpageContainer],
  templateUrl: './categories-subpage.html',
  styleUrl: './categories-subpage.css',
  providers: [
    provideIcons({
      category: lucideList,
      add: lucideCirclePlus,
      goto: lucideChevronRightCircle,
    })
  ]
})
export class CategoriesSubpage {

  readonly categories = input.required<ExpenseCategory[]>();
}
