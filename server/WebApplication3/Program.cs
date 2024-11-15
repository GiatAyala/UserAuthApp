using BAL;
using DAL;
using DAL.models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


//����� ���� ������

builder.Services.AddDbContext<UserDbContext>(y => y.UseSqlServer("Server = DESKTOP-AA621HP; Database = UserDb; Trusted_Connection = True; TrustServerCertificate = True;"));


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();


//����� ���� �����
builder.Services.AddCors(o => o.AddPolicy("All", builder =>
{
    builder

    .AllowAnyOrigin()//�� ����
    .AllowAnyMethod()//�� �������
    .AllowAnyHeader();//�� �����
}));

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("All");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
