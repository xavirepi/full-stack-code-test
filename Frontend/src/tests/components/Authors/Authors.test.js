import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, useLocation, Link } from 'react-router-dom';
import Authors from '../../../components/Authors/Authors'
import { authors as authorsData } from '../../../data/authors.json';

const AuthorDisplay = () => {
  const author = useLocation();

  return (
    <Link to={`/author/${author.id}`}>
      <div className="Authors__list" key={author.id}>
          <p>
            {author.first_name} {author.last_name}
          </p>
      </div>
    </Link> 
  )
}

const UI = () => {
  return (
    <BrowserRouter>
      <AuthorDisplay />
    </BrowserRouter>
  )
}

describe('Authors Component', () => {
  const { queryByText } = render(<UI />)

  const brandNode = queryByText('All Authors')

  console.log(brandNode);

  expect(brandNode.nodeName).toBe('H1')
})