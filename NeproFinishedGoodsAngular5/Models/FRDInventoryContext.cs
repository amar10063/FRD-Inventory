using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace FRDInventory.Models
{
    public partial class FRDInventoryContext : DbContext
    {
        public FRDInventoryContext()
        {
        }

        public FRDInventoryContext(DbContextOptions<FRDInventoryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblUserLogin> TblUserLogin { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
           .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
           .AddJsonFile("appsettings.json")
           .Build();


                optionsBuilder.UseSqlServer(configuration.GetConnectionString("FRDInventoryContext"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblUserLogin>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tblUserLogin");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.CreatedById)
                    .HasColumnName("CreatedByID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedByName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("smalldatetime");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.HostAddress)
                    .HasColumnName("Host_Address")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PasswordKey)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RefrenceId).HasColumnName("RefrenceID");

                entity.Property(e => e.UpdatedById)
                    .HasColumnName("UpdatedByID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedByName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedOn).HasColumnType("smalldatetime");

                entity.Property(e => e.UserName).HasMaxLength(250);

                entity.Property(e => e.UserRole)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserRoleId).HasColumnName("UserRoleID");
            });
        }
    }
}
