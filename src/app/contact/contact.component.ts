import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private _MessageService: MessageService) { }

  ngOnInit() {
  }

  processForm() {
    console.log("Enviamos el formulario!");
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
    let form = {
      nombre: this.name,
      email: this.email,
      mensaje: this.message
    }
    this._MessageService.sendMessage(form).subscribe(() => {
      console.log("Formulario de contacto", "Mensaje enviado correctamente", 'success');
      Swal.fire(
        'Good job!',
        'You successfully sent the message!',
        'success'
      );
    });
  }
}
