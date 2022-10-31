$(document).ready(() => {  
        const inp = $("input");
        let ids = [];
	const h4amen = $(".amenities h4")
        inp.on("change", () => {         
                if (inp.prop('checked')) {
                        ids.push(inp.attr("data-id"));
			h4amen.append("<p>"+inp.attr("data-name")+"</p>");
                } else {
                        let idx = ids.indexof(inp.attr("data-id"))
                        ids.splice(idx, 1);
                }
        })
})
