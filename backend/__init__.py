#encoding:utf-8
from flask import Flask,render_template

def create_app():
	app=Flask(__name__,template_folder="templates",static_folder="static")

	@app.route('/')
	def hello():
		return render_template('index.html')

	app.debug=True
	return app


#卧槽，把staticurl去掉之后就可以了，卧槽
