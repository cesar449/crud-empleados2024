import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-empleados';
  msg = '';
  empleados = [
    { name: 'Hugo', position: 'Programador Jr.', salary: 10000, age: 15, sex: 'M', email: 'hugo@disney.com' },
    { name: 'Paco', position: 'Programador Sr.', salary: 15000, age: 18, sex: 'M', email: 'paco@disney.com' },
    { name: 'Luis', position: 'Administrador Red', salary: 40000, age: 21, sex: 'M', email: 'luis@disney.com' }
  ];

  modelo = { name: '', position: '', salary: 0, age: 0, sex: '', email: '' };
  modelo2 = { name: '', position: '', salary: 0, age: 0, sex: '', email: '' };
  myValue = 0;

  addEmpleado(): void {
    if (this.isValidEmpleado(this.modelo)) {
      this.empleados.push({ ...this.modelo });
      this.modelo = { name: '', position: '', salary: 0, age: 0, sex: '', email: '' };
      this.msg = 'Empleado agregado!';
    } else {
      this.msg = 'Por favor, completa todos los campos.';
    }
  }

  deleteEmpleado(i: number): void {
    this.empleados.splice(i, 1);
    this.msg = 'Empleado eliminado!';
  }

  editEmpleado(i: number): void {
    this.myValue = i;
    this.modelo2 = { ...this.empleados[i] };
    this.msg = '';
  }

  updateEmpleado(): void {
    if (this.isValidEmpleado(this.modelo2)) {
      let i = this.myValue;
      this.empleados[i] = { ...this.modelo2 };
      this.modelo2 = { name: '', position: '', salary: 0, age: 0, sex: '', email: '' };
      this.msg = 'Empleado actualizado!';
    } else {
      this.msg = 'Por favor, completa todos los campos.';
    }
  }

  isValidEmpleado(empleado: any): boolean {
    return empleado.name && empleado.position && empleado.salary > 0 && empleado.age > 0 && empleado.sex && empleado.email;
  }
}