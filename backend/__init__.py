#-- coding:utf-8 --
from flask import Flask,render_templates

def create_app():
	app=Flask(__name__,template_folder="templates",static_url_path="/backend/static")
	from . import main
	app.register_blueprint(main.main)
	app.config['SECURE_KEY']='1233211234567kkkbyxgltt'
	app.debug=True
	return app

#上边import main和后面两行是什么意思呀