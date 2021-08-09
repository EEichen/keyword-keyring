from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=['PUT'])
@login_required
def change_password():
    pass
