export async function loadBibleARC() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/biblia/ARC.json`);
    if (!response.ok) {
      throw new Error('Failed to load Bible data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading Bible:', error);
    throw error;
  }
}
