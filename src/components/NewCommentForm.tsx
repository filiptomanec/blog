import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewCommentForm() {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the form submission logic here
    };

    return (
        <div>
            <h1>New Comment Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        placeholder="Enter your name"
                    />
                </Form.Group>

                <Form.Group controlId="text">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Enter your comment"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default NewCommentForm;