using System.Net;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Net.Http.Headers;

public class PermanentRedirect : IRule
{
    public void ApplyRule(RewriteContext context)
    {
        var res = context.HttpContext.Response;
        res.Headers[HeaderNames.Location] = @"https://brianlaurawedding.co.uk/day";
        res.StatusCode = (int)HttpStatusCode.MovedPermanently;
        context.Result = RuleResult.EndResponse; // Do not continue processing the request   
    }
}