import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[] = [
    new Contact(1, "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", "../../../assets/img/jacksonk.jpg", null),
    new Contact(2, "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../../assets/img/barzeer.jpg", null)
  ];
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
    // console.log(contact);
  }
}
