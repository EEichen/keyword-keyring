from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=['PUT'])
@login_required
def change_password():
    data = request.json()
    user = current_user
