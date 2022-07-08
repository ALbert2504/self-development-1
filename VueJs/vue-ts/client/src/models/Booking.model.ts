class BookingModel {
  theatreId: string;
  userId: string;
  userEmail: string;
  userName: string;

  constructor(theatreId: string, userId: string, userEmail: string, userName: string) {
    this.theatreId = theatreId;
    this.userId = userId;
    this.userEmail = userEmail;
    this.userName = userName;
  }
}

export default BookingModel;