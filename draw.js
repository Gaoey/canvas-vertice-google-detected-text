const width = 504
const height = 792
const calx = (x) => width * x
const caly = (y) => height * y

const drawlineFromVertices = (ctx, arr, log = "", color) => {
  console.log({ log })
  ctx.strokeStyle = color;
  arr.forEach((c, i) => {
    console.log(c)
    if (i == arr.length - 1) {
      console.log(`move x ===> ${calx(arr[i].x)}, move y ===> ${caly(arr[i].y)}`)
      console.log(`line to x ===> ${calx(arr[0].x)}, line to y ===> ${caly(arr[0].y)}`)
      ctx.moveTo(calx(arr[i].x), caly(arr[i].y))
      ctx.lineTo(calx(arr[0].x), caly(arr[0].y))
      ctx.stroke()
    } else {
      console.log(`move x ===> ${calx(arr[i].x)}, move y ===> ${caly(arr[i].y)}`)
      console.log(`line to x ===> ${calx(arr[i + 1].x)}, line to y ===> ${caly(arr[i + 1].y)}`)
      console.log("------")
      ctx.moveTo(calx(arr[i].x), caly(arr[i].y))
      ctx.lineTo(calx(arr[i + 1].x), caly(arr[i + 1].y))
      ctx.stroke()
    }
  })
}

const draw = () => {
  // setup
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, width, height);

  // draw vertices
  const paragraph1 = {
    normalizedVertices: [
      {
        x: 0.34126985,
        y: 0.041666668
      },
      {
        x: 0.9444444,
        y: 0.041666668
      },
      {
        x: 0.9444444,
        y: 0.053030305
      },
      {
        x: 0.34126985,
        y: 0.053030305
      }
    ]
  }
  const p1 = paragraph1.normalizedVertices
  drawlineFromVertices(ctx, p1, "paragraph 1", "red")

  const paragraph2 = {
    normalizedVertices: [
      {
        x: 0.48015872,
        y: 0.05050505
      },
      {
        x: 0.9444444,
        y: 0.05050505
      },
      {
        x: 0.9444444,
        y: 0.07449495
      },
      {
        x: 0.48015872,
        y: 0.07449495
      }
    ]
  }
  const p2 = paragraph2.normalizedVertices
  drawlineFromVertices(ctx, p2, "paragraph 2", "blue")

  const paragraph3 = {
    normalizedVertices: [
      {
        x: 0.03968254,
        y: 0.07954545
      },
      {
        x: 0.9444444,
        y: 0.084595956
      },
      {
        x: 0.9444444,
        y: 0.11742424
      },
      {
        x: 0.037698414,
        y: 0.11237374
      }
    ]
  }
  const p3 = paragraph3.normalizedVertices
  drawlineFromVertices(ctx, p3, "paragraph 3", "yellow")
}

draw()