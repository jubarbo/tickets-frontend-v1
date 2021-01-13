class fetchData  {


async tryFetch(url) => {
  console.log(this.state.loading);
  this.setState({ loading: true, error: null });
  try {
    const data = await (await fetch(url)).json();
    this.setState({ loading: false, tickets: data.tickets });
  } catch (error) {
    this.setState({ loading: false, error: error });
  }
};
}

export default fetchData;
