package daikichiController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("")
public class Daikichi {

	@GetMapping("/daikichi/travel/{name}")
	public String name(@PathVariable("name") String name) {
		return "'Congratulations! You will soon travel to kyoto! "+name;
	}
	@GetMapping("/daikichi/lotto/{num}")
	public String name(@PathVariable("num") int num) {
		if(num%2==0) {			
		return "You will take a grand journey in the near future, but be weary of tempting offers";
		}else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
		}
	}
}
