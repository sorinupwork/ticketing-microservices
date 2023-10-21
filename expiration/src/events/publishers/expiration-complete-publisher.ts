import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@scatickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
