from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Generator, Constraints


generator_routes = Blueprint('generators', __name__)


@generator_routes.route('/')
@login_required
def get_generators():
    generators = Generator.query.filter(
        Generator.user_id == current_user.id).all()

    # # api test
    # generators = Generator.query.filter(
    #     Generator.user_id == 1).all()

    return {generator.id: generator.to_dict() for generator in generators}


@generator_routes.route('/', methods=['POST'])
@login_required
def create_generator():
    data = request.json
    seed_start = current_user.hashed_password[-5:]

    ini_seed = 0

    for i in seed_start:
        ini_seed += ord(i)

    # note! replace seed 1 with actual seed later
    generator = Generator(
        title=data['title'],
        seed=1,
        user_id=current_user.id
    )
    # # test generator generation
    # generator = Generator(
    #     title=data['title'],
    #     seed=1,
    #     user_id=1
    # )

    db.session.add(generator)
    db.session.commit()

    seed = int(str(current_user.id) + str(generator.id) + str(ini_seed))

    print('keyword')
    print(seed)

    generator.seed = seed

    db.session.add(generator)

    constraints = Constraints(generator_id=generator.id)
    db.session.add(constraints)
    db.session.commit()

    return generator.to_dict()


@generator_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_generator(id):
    generator = Generator.query.get(id)
    data = request.json

    generator.iteration = data['iteration']
    generator.title = data['title']

    db.session.add(generator)
    db.session.commit()

    return generator.to_dict()


@generator_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_generator(id):
    generator = Generator.query.get(id)

    db.session.delete(generator)
    db.session.commit()

    return {"message": "Deleted!"}
