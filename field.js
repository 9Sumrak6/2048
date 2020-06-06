function Field(n = 4) {
	this.n = n

	this.size = 500
	this.paddingTop = 50
	this.paddingBottom = 10
	this.paddingHor = 10
	
	this.cellSize = this.size / this.n

	this.fieldColor = "#bdaca0"
	this.colors = [
		"#cdc2b3",
		"#efe5da",
		"#ece0c8",
		"#f0b17d",
		"#f19867",
		"#f07e63",
		"#f46141",
		"#eacf78",
		"#edcd66",
		"#ecc75b",
		"#e8c256",
		"#e9be4c",
	]

	this.cells = []

	for (let i = 0; i < n; i++) {
		this.cells[i] = []

		for (let j = 0; j < n; j++)
			this.cells[i][j] = Math.floor(Math.random() * 12)
	}
}

Field.prototype.DrawCells = function(ctx) {
	ctx.font = "50px Arial"
	ctx.textAlign = "center"
	ctx.textBaseline = "middle"

	for (let i = 0; i < this.n; i++) {
		for (let j = 0; j < this.n; j++) {
			let value = this.cells[i][j]

			let x = this.paddingHor + j * this.cellSize
			let y = this.paddingTop + i * this.cellSize

			ctx.fillStyle = this.colors[value]
			ctx.fillRect(x + 3, y + 3, this.cellSize - 6, this.cellSize - 6)
			
			if (value == 0)
				continue

			ctx.fillStyle = value < 3 ? this.fieldColor : "#fff"
			ctx.fillText(1 << value, x + this.cellSize / 2, y + this.cellSize / 2)
		}
	}
}

Field.prototype.Draw = function(canvas) {
	let ctx = canvas.getContext("2d")

	canvas.width = this.size + 2 * this.paddingHor
	canvas.height = this.size + this.paddingTop + this.paddingBottom

	ctx.beginPath()
	ctx.strokeStyle = "#000"
	ctx.fillStyle = this.fieldColor
	ctx.rect(this.paddingHor, this.paddingTop, this.size, this.size)
	ctx.stroke()
	ctx.fill()

	this.DrawCells(ctx)
}