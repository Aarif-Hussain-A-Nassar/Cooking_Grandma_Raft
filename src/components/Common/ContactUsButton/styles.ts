'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: #fe4d43;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
`;
