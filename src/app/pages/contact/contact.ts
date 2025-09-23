import { Component } from '@angular/core';
import { Form } from '../../components/form/form';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [Form, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
