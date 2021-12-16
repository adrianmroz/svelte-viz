export interface Scale<Domain, Range> {
  (value: Domain): Range;
  domain(): Domain[];
  domain(domain: Iterable<Domain>): this;
  range(): Range[];
  range(range: Iterable<Range>): this;
  copy(): this;
}
