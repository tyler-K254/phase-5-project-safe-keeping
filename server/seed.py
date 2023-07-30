import random
from random import randint, choice as rc
from faker import Faker
from app import app
from models import db, User, Booking, Bus

fake = Faker()

with app.app_context():
    User.query.delete()
    Bus.query.delete()
    Booking.query.delete()

    
    availability = ['True', 'False']
    From = ['nrb', 'nrb', 'eld', 'entebbe', 'kigali']
    To=['msa','ksm','msa',"dar",'kampala']
    buses = []
    for n in range(30):
        b = Bus(name=fake.name(),
                seats=random.randint(1,40),
                cost=random.randint(1000,2000),
                From=rc(From),
                To=rc(To),
                departure=fake.time(),
                availability=rc(availability))
        buses.append(b)
    db.session.add_all(buses)

    roles = ['admin', 'customer', 'driver']
    users = []
    for n in range(30):
        u = User(name=fake.name(),
                 password=fake.password(),
                 role=rc(roles))
        users.append(u)

    db.session.add_all(users)

    bookings = []
    for n in range(30):
        bk = Booking(seatnumber=random.randint(1,40),
                    bus_id=random.randint(1,30),
                    user_id=random.randint(1,30))
        bookings.append(bk)

    db.session.add_all(bookings)
    db.session.commit()


