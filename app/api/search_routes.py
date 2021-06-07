from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Generator, Constraints


search_routes = Blueprint('search', __name__)


@search_routes.route('/<user_input>')
@login_required
def search_gen(user_input):
    fnd_generators = Generator.query.filter(
        Generator.user_id == current_user.id).filter(
        Generator.title.ilike(f'%{user_input}%')
        ).all()

    # # test search
    # fnd_generators = Generator.query.filter(
    #     Generator.user_id == 1).filter(
    #     Generator.title.ilike(f'%{user_input}%')
    # ).all()

    if(len(fnd_generators) > 0):
        return {
            generator.id: generator.to_dict() for generator in fnd_generators
            }

    return {"message": "No Generators Found"}
