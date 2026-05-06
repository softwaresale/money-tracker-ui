import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmLabel } from "@spartan-ng/helm/label";
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmNativeSelectImports } from "@spartan-ng/helm/native-select";
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';

@Component({
  selector: 'app-expense-form',
  imports: [HlmFieldImports, HlmLabel, HlmInputImports, HlmNativeSelectImports, HlmInputGroupImports],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.css',
})
export class ExpenseForm {

}
