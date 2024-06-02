import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type NgTypedForm<TFormData extends object> = FormGroup<{
	[TFormKey in keyof TFormData]: TFormData[TFormKey] extends Date
		? FormControl<Date>
		: TFormData[TFormKey] extends (infer TItem)[]
			? TItem extends Date
				? FormControl<Date[]>
				: TItem extends object
					? FormArray<NgTypedForm<TItem>>
					: FormControl<TItem[]>
			: TFormData[TFormKey] extends object
				? NgTypedForm<TFormData[TFormKey]>
				: FormControl<TFormData[TFormKey]>;
}>;
