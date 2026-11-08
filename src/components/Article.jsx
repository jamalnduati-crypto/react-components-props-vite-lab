function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emojis;
  if (minutes < 30) {
    emojis = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    emojis = "🍱".repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;