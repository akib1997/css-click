import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { GridService } from '../../services/grid.service';
import { displayGridValues } from '@app/core/enums/grid/enum-grid';
import { IGrid } from '@app/models/grid/grid.model';

@Component({
  selector: 'grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss'],
})
export class GridFormComponent implements OnInit {
  displyValues = displayGridValues;
  form: UntypedFormGroup;
  gridTemplateColumns: number[] =
    this.gridService.initialValues.gridTemplateColumns;
  // gridTemplateColumnsForm: FormGroup;

  constructor(private fb: FormBuilder, private gridService: GridService) {}

  ngOnInit() {
    this.initializeForm();
  }

  updateGridValue(data: any): void {
    this.gridService.updateGridValue(data)
  }

  initializeForm(): void {
    this.form = this.fb.group<any>({
      display: this.fb.control(this.gridService.initialValues.display, [
        Validators.required,
      ]),
      gridTemplateColumns: this.fb.array(
        this.gridTemplateColumns.map(col =>  this.fb.control(col)),
        [Validators.required, Validators.max(150)]
      ),
      gridTemplateRows: this.fb.array(
        [],
        [Validators.required]
      ),
    });

    this.form.valueChanges.subscribe((data) => {
      // console.log(data, 'kdarfagdrkldgrfahjbl')
      // const arrayOfNumbers = extractPropertyValues(data?.gridTemplateColumns, 'width');
      // data.gridTemplateColumns = arrayOfNumbers;
      this.updateGridValue(data);
    });
  }

  get numbersArray() {
    return this.form.get('numbersArray') as FormArray;
  }

  addGridTemplateColumns(): void {
    const column = this.fb.group({
      width: [20, Validators.required],
    });
    this.gridTemplateColumnsArray.push(column);
  }

  removeGridTemplateColumns(columnIndex: number): void {
    this.gridTemplateColumnsArray.removeAt(columnIndex);

  }

  get gridTemplateColumnsArray(): FormArray {
    return this.form.get('gridTemplateColumns') as FormArray;
  }
}

type IGridForm = {
  // [d in keyof Pick<IGrid, 'display'>]: FormControl<IGrid[d] | null>;
  display: FormControl<string | null>;
  gridTemplateColumns: AbstractControl<(number | null)[]>;
  gridTemplateRows: AbstractControl<(number | null)[]>;
};

interface TypedForm {
  // roles: FormArray<(number | null)[]>
}

function extractPropertyValues(arrayOfObjects: any[], propertyName: string): any[] {
  return arrayOfObjects.map(item => item[propertyName]);
}
