from app.models import db, User, Generator, Constraints
import random


def seed_generators():
    user = User.query.get(1)
    seed_start = user.hashed_password[-5:]
    ini_seed = 0

    titles = [
        'Work',
        'Work Email',
        'Personal Email',
        'Social Media',
        'Game 1',
        'Game 2',
        'Game 3',
        'App 1',
        'App 2',
        'App 3'
    ]

    for i in seed_start:
        ini_seed += ord(i)

    for i in range(0, len(titles)):

        generator = Generator(
            title=titles[i],
            seed=1,
            user_id=1,
            iteration=random.randint(0, 20)
        )

        db.session.add(generator)
        db.session.commit()

        seed = int(str(user.id) + str(generator.id) + str(ini_seed))

        generator.seed = seed
        db.session.add(generator)

        constraints = Constraints(generator_id=generator.id)
        db.session.add(constraints)
        db.session.commit()


def undo_generators():
    db.session.execute('TRUNCATE generators RESTART IDENTITY CASCADE;')
    db.session.commit()
