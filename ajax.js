$(document).ready(function() {
	$("ajaxbutton").click(function() {
		$ajax({
			type: "Post",
			url: "employee.php",
			sucess: function(data) {
				var obj = $.parse.JSON(data);
				var result = "<ul>"
				$.each(obj,function() {
					result = result + "<li>First Name : " + this['firstname']
					+ ", Last Name : " + this['lastname'] + "</li>";
				});
				result = result + "</ul>"
				$("#result") = result + "</ul>"
			}
		});
	});
});