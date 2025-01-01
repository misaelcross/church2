CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT now(),
  email text,
  full_name text
);