var tl = gsap.timeline();

tl.from(".nav h3", {
	y: -50,
	opacity: 0,
	delay: 0.4,
	duration: 0.4,
	stagger: 0.2,
});

tl.from(".head1", {
	x: -50,
	opacity: 0,
	delay: 0.2,
	duration: 0.4,
});

tl.from(".head2", {
	x: 50,
	opacity: 0,
	delay: 0.2,
	duration: 0.4,
});

tl.from(".head3", {
	y: 50,
	opacity: 0,
	delay: 0.2,
	duration: 0.4,
});

tl.from("img", {
	x: 100,
	delay: 0.1,
	duration: 0.4,
	opacity: 0,
	rotate: 45,
	stagger: 0.5,
});

tl.from(".footer h4", {
	y: 30,
	opacity: 0,
	delay: 0.2,
	duration: 0.4,
	stagger: 0.2,
});

tl.from(".footer2", {
	y: 30,
	opacity: 0,
	delay: 0.2,
	duration: 0.4,
	stagger: 0.2,
});
