from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Generator, Constraints

constraints_routes = Blueprint('constraints', __name__)


def check_characters(string, default):

    characters = list(string)
    i = 0

    while i < len(characters):
        if characters[i] not in default:
            characters.pop(i)
        else:
            i += 1

    return ''.join(characters)


@constraints_routes.route('/<int:gen_id>')
@login_required
def get_constraints(gen_id):
    generator = Generator.query.get(gen_id)
    constraints = Constraints.query.get(generator.constraints.id)

    return constraints.to_dict()


@constraints_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_constraints(id):
    data = request.json
    constraints = Constraints.query.get(id)
    default_lowercase = 'abcdefghijklmnopqrstuvwxyz'
    default_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    default_numbers = '1234567890'
    default_symbols = "!# \"$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    if 'uppercase_letters' in data.keys():
        constraints.uppercase_letters = check_characters(
            data['uppercase_letters'], default_uppercase)

    if 'lowercase_letters' in data.keys():
        constraints.lowercase_letters = check_characters(
            data['lowercase_letters'], default_lowercase)

    if 'numbers' in data.keys():
        constraints.numbers = check_characters(
            data['numbers'], default_numbers)

    if 'symbols' in data.keys():
        constraints.symbols = check_characters(
            data['symbols'], default_symbols)

    if 'pw_length' in data.keys():
        if int(float(data['pw_length'])) < 4:
            data['pw_length'] = 4
        constraints.pw_length = int(float(data['pw_length']))

    if 'required_uppercase' in data.keys():
        if int(float(data['required_uppercase'])) < 0:
            data['required_uppercase'] = 0
        constraints.required_uppercase = int(float(data['required_uppercase']))

    if 'required_numbers' in data.keys():
        if int(float(data['required_numbers'])) < 0:
            data['required_numbers'] = 0
        constraints.required_numbers = int(float(data['required_numbers']))

    if 'required_symbols' in data.keys():
        if int(float(data['required_symbols'])) < 0:
            data['required_symbols'] = 0
        constraints.required_symbols = int(float(data['required_symbols']))

    if 'allow_duplicates' in data.keys():
        constraints.allow_duplicates = data['allow_duplicates']

    db.session.add(constraints)
    db.session.commit()

    return constraints.to_dict()
