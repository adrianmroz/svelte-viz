export interface Scale<Domain, Range> {
  (value: Domain): Range;
  domain(): Domain[];
  domain(domain: Iterable<Domain>): this;
  range(range: Iterable<Range>): this;
  copy(): this;
}
