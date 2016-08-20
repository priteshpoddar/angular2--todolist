/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TodoComponentComponent } from './todo-component.component';

describe('Component: TodoComponent', () => {
  it('should create an instance', () => {
    let component = new TodoComponentComponent();
    expect(component).toBeTruthy();
  });
});
