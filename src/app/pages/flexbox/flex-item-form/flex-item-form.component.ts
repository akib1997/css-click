import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  TAlignContent,
  TAlignSelf,
  alignSelfValues,
} from '@app/core/enums/enum-flex';
import { FlexItemService } from '@app/core/services/flex-item.service';

@Component({
  selector: 'flex-item-form',
  templateUrl: './flex-item-form.component.html',
  styleUrls: ['./flex-item-form.component.css'],
})
export class FlexItemFormComponent implements OnInit {
  flexItemData: IFlexItem;
  alignSelfValues = alignSelfValues;
  form: FormGroup<TFlexItemForm>;
  constructor(
    private fb: FormBuilder,
    private flexItemService: FlexItemService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.flexItemService.flexItemData.subscribe((data) => {
      this.flexItemData = data;
    });
    const { order, flex, flexBasis, flexGrow, flexShrink, alignSelf } =
      this.flexItemService.initialData;

    this.form = this.fb.group<TFlexItemForm>({
      order: this.fb.control(order, [Validators.required]),
      flexGrow: this.fb.control(flexGrow, [Validators.required]),
      flexShrink: this.fb.control(flexShrink, [Validators.required]),
      flexBasis: this.fb.control(flexBasis, [Validators.required]),
      flex: this.fb.control(flex, [Validators.required]),
      alignSelf: this.fb.control(alignSelf, [Validators.required]),
    });

    this.updateFlexItemValue()
  }

  updateFlexItemValue(): void {
    this.form.valueChanges.subscribe((data) => {
      this.flexItemService.updateFlexItemData(data as IFlexItem);
    });
  }
}

type TFlexItemForm = {
  [K in keyof IFlexItem]: FormControl<IFlexItem[K] | null>;
};

export interface IFlexItem {
  order: number;
  flexGrow: number;
  flexShrink: number;
  flexBasis: number;
  flex: [number, number, number];
  alignSelf: TAlignSelf;
}

// | 'auto'
// | 'stretch'
// | 'center'
// | 'flex-start'
// | 'flex-end'
// | 'baseline'
// | 'initial'
// | 'inherit';
