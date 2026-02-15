import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S.A.D.A.F - Solutions for DevOps Automated FinOps',
  description: 'Real AWS savings, production-safe execution, measurable outcomes. AWS cloud cost optimization and FinOps solutions.',
  keywords: ['AWS', 'FinOps', 'Cloud Cost Optimization', 'DevOps', 'Cost Savings'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
