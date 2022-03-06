<form onSubmit={handleSubmit} className='movie-form'>
<TextField
  placeholder='Enter movie description'
  onChange={(event) => {
    setTitle(event.target.value);
  }}
  size='small'
/>
<Button type='submit' variant='contained'>
    Submit
</Button>
</form>