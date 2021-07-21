from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Options

options_routes = Blueprint('constraints', __name__)


@options_routes.route('/options', methods=['PUT'])
@login_required
def update_options():
    data = request.json
    options = Options.query.get(data['id'])

    options.allow_ls = data['allow_ls']
    options.hints = data['hints']

    db.session.add(options)
    db.session.commit

    return options.to_dict()
