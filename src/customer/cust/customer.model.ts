import { NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

// create -> validation object model 
// connect -> connection the validation in UI
// check -> IsValid, IsDirty

export class Customer {
    CustomerCode: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;    

    formCustomerGroup: FormGroup = null; //create object of form group

constructor() {
var _builder = new FormBuilder();
this.formCustomerGroup = _builder.group({}); // use builder to create -> formGroup -> Builder 
//control --> validation
// 1 control - 1 validation
this.formCustomerGroup.addControl('CustomerNameControl', 
                                    new FormControl('', Validators.required));

// customer code control --> Required 4 letter numeric
var validationCollection = [];
validationCollection.push(Validators.required);
validationCollection.push(Validators.pattern("^[0-9]{4,4}$"));

this.formCustomerGroup.addControl('CustomerCodeControl', 
                                    new FormControl('', Validators.compose(validationCollection)));

}

}
