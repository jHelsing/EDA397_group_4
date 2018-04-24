import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Speciality } from '../../models/speciality';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SpecialityProvider {
  private specialityObservable: Observable<Speciality[]>;
  private specialityCollection: AngularFirestoreCollection<Speciality>;

  constructor(public fireStore: AngularFirestore) {
    this.specialityCollection = fireStore.collection<Speciality>('/specialties');
    this.specialityObservable = this.specialityCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Speciality,
    })));
  }

  public getSpecialities() {
    return this.specialityObservable;
  }
}
