import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import FieldValue = firebase.firestore.FieldValue;

export class Comment {
  public title: string;
  public category: string;
  public description: string;
  public patient: DocumentReference;
  public imageUrl?: string;
  public createdAt: FieldValue;
  public createdBy: string;  // Copy the current author's name for avoiding future errors if that reference is removed
}
