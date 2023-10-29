self.addEventListener('push', e => {
  const {title, body, badge, image} = e.data.json();

  console.log({title, body, badge, image});
  self.registration.showNotification(title, {
    body,
    icon: "./escaneapet.png",
    badge,
    image,
  });
});