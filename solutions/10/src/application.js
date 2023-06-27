import escapeHtml from 'escape-html';

// BEGIN
export default function initFeedbackForm() {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const nameInput = form.querySelector('input[name="name"]');
  const commentInput = form.querySelector('textarea[name="comment"]');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const email = escapeHtml(emailInput.value);
    const name = escapeHtml(nameInput.value);
    const comment = escapeHtml(commentInput.value);

    const feedbackData = 
      <div>
        <p>Feedback has been sent</p>
        <div>Email: ${email}</div>
        <div>Name: ${name}</div>
        <div>Comment: ${comment}</div>
      </div>
    ;

    form.replaceWith(feedbackData);
  });
}
// END