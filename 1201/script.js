d3.select("body")
  .append("svg")
  .attr("width", 200)
  .attr("height", 100)
  .style("background-color", "lightgray")
  .append("rect") // 在 SVG 內添加矩形元素
  .attr("x", 50)
  .attr("y", 20)
  .attr("width", 100)
  .attr("height", 100)
  .style("fill", "blue");


  const colors=["red","orange","yellow","green","blue"]

  const circles = d3.selectAll("#svg circle")




  function newAnimation(){
  circles
  .style("fill",(d,index)=>colors[index])
  .attr("r",(d,i)=>i*5)
  .style("opacity",0)


 //first round
  .transition()
  .duration(1000)
  .delay((d,i)=>i*300)
  .attr("r",20)
  .style("opacity",1)

 //second round
  .transition() 
  .duration(100)
  .style("opacity",0)

  .on("end",(d,i)=>{

     if (i===4) {
     newAnimation() 
     }

    }
  )

  }

  newAnimation();








const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				//do something
			}
		});
	},
	{ threshold: 0.5 }
);

observer.observe(element);