AppClasses.Views.Guilds = class extends Backbone.View {
	constructor(opts) {
		super(opts);
		this.tagName = "div";
		this.template = App.templates["guilds/index"];
		this.updateRender(); // render the template only one time, unless model changed
		this.listenTo(this.model, "change reset add remove", this.updateRender);
		this.model.fetch();
	}
	updateRender() {
		this.$el.html(this.template({
			guilds: this.model.toJSON()
		}));
		return (this);
	}
	render() {
		this.model.fetch();
		return (this);
	}
}
