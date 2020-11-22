import React from 'react';
import Boolean from './Boolean';
import { screen, fireEvent } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container: HTMLDivElement | null = null;

const definition: FieldBooleanDefinition = {
  type: 'boolean',
  id: 'agree',
  question_text: 'Agree?',
  metadata: {
    required: false,
  },
};

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it('renders field with two buttons', () => {
  act(() => {
    render(
      <Boolean
        {...definition}
        value={null}
        handleChange={({ key, value }) => {}}
      />,
      container
    );
  });

  expect(
    (container?.querySelectorAll('.input')[0] as HTMLInputElement).checked
  ).toBe(false);
  expect(
    (container?.querySelectorAll('.input')[1] as HTMLInputElement).checked
  ).toBe(false);
  expect(container?.querySelectorAll('.label')[0]?.textContent).toBe('Yes');
  expect(container?.querySelectorAll('.label')[1]?.textContent).toBe('No');
});

it('renders initial value', () => {
  act(() => {
    render(
      <Boolean
        {...definition}
        value={true}
        handleChange={({ key, value }) => {}}
      />,
      container
    );
  });

  expect(
    (container?.querySelectorAll('.input')[0] as HTMLInputElement).checked
  ).toBe(true);
  expect(
    (container?.querySelectorAll('.input')[1] as HTMLInputElement).checked
  ).toBe(false);

  act(() => {
    render(
      <Boolean
        {...definition}
        value={false}
        handleChange={({ key, value }) => {}}
      />,
      container
    );
  });

  expect(
    (container?.querySelectorAll('.input')[0] as HTMLInputElement).checked
  ).toBe(false);
  expect(
    (container?.querySelectorAll('.input')[1] as HTMLInputElement).checked
  ).toBe(true);
});

it('changes value', () => {
  const mockCallback = jest.fn();

  act(() => {
    render(
      <Boolean {...definition} value={null} handleChange={mockCallback} />,
      container
    );
  });
  act(() => {
    fireEvent.click(screen.getByText('Yes'));
  });

  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toBeCalledWith({
    key: 'agree',
    value: true,
  });

  mockCallback.mockClear();
  act(() => {
    render(
      <Boolean {...definition} value={true} handleChange={mockCallback} />,
      container
    );
  });
  act(() => {
    fireEvent.click(screen.getByText('No'));
  });

  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith({
    key: 'agree',
    value: false,
  });

  mockCallback.mockClear();
  act(() => {
    render(
      <Boolean {...definition} value={false} handleChange={mockCallback} />,
      container
    );
  });
  act(() => {
    fireEvent.click(screen.getByText('Yes'));
  });

  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith({
    key: 'agree',
    value: true,
  });
});

it('renders with error class', () => {
  act(() => {
    render(
      <Boolean
        {...definition}
        value={null}
        handleChange={({ key, value }) => {}}
        hasError={false}
      />,
      container
    );
  });

  expect(
    container?.querySelector('.boolean')?.classList.contains('hasError')
  ).toBe(false);

  act(() => {
    render(
      <Boolean
        {...definition}
        value={null}
        handleChange={({ key, value }) => {}}
        hasError={true}
      />,
      container
    );
  });

  expect(
    container?.querySelector('.boolean')?.classList.contains('hasError')
  ).toBe(true);
});
