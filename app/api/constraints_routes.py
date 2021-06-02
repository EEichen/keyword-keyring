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
@login_required
def edit_constraints(id):
    data = request.json
    constraints = Constraints.query.get(id)

    return None
