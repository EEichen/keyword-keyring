from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Generator, Constraints

constraints_routes = Blueprint('constraints', __name__)


@constraints_routes.route('/<int:gen_id>')
# @login_required
def get_constraints(gen_id):
    generator = Generator.query.get(gen_id)
    constraints = Constraints.query.get(generator.constraints.id)

    return constraints.to_dict()


@constraints_routes.route('/<int:id>', methods=['PUT'])
# @login_required
def edit_constraints(id):
    data = request.json
    constraints = Constraints.query.get(id)
    print('mykeyword')
    print('uppercase_letters' in data.keys())

    if 'uppercase_letters' in data.keys():
        constraints.uppercase_letters = data['uppercase_letters']

    if 'lowercase_letters' in data.keys():
        constraints.lowercase_letters = data['lowercase_letters']

    if 'numbers' in data.keys():
        constraints.numbers = data['numbers']

    if 'symbols' in data.keys():
        constraints.symbols = data['symbols']

    if 'pw_length' in data.keys():
        constraints.pw_length = data['pw_length']

    if 'required_uppercase' in data.keys():
        constraints.required_uppercase = data['required_uppercase']

    if 'required_numbers' in data.keys():
        constraints.required_numbers = data['required_numbers']

    if 'required_symbols' in data.keys():
        constraints.required_symbols = data['required_symbols']

    if 'allow_duplicates' in data.keys():
        constraints.allow_duplicates = data['allow_duplicates']

    db.session.add(constraints)
    db.session.commit()

    return constraints.to_dict()
