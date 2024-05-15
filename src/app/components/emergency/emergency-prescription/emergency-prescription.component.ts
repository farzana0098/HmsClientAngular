import { Component } from '@angular/core';
import { Emergency } from '../../../models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emergency-prescription',
  templateUrl: './emergency-prescription.component.html',
  styleUrl: './emergency-prescription.component.css'
})
export class EmergencyPrescriptionComponent {
  public model!: Emergency;
  emergencyid!: number;

  constructor(private Service: EmergencyService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.emergencyid = this.route.snapshot.params['id'];
    this.LoadData();
  }

  LoadData() {
    this.Service.GetPrescription(this.emergencyid).subscribe((data: Emergency) => {

      this.model = data;
      console.log(data);

    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  OnSubmit() {

    this.Service.SetPrescription(this.model).subscribe({
      next: () => {
        this.router.navigate(["EmergencyList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
